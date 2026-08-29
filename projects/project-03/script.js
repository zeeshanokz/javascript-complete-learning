/**
 * =====================================================
 * PROJECT: GitHub Profile Lookup
 * =====================================================
 *
 * Definition:
 * A small client that calls the GitHub REST API with fetch
 * and renders JSON as a profile card.
 *
 * Why it is important:
 * Same skills as talking to your own backend: HTTP, JSON,
 * loading/error states, and checking response.ok.
 *
 * Open: projects/project-03/index.html (needs network)
 *
 * Security note:
 * Do not assign API strings to innerHTML. Use textContent
 * and createElement so a bio cannot inject HTML.
 */

const form = document.getElementById("search-form");
const usernameInput = document.getElementById("username");
const output = document.getElementById("output");

function renderProfile(user) {
  output.replaceChildren();

  const img = document.createElement("img");
  img.alt = `${user.login} avatar`;
  img.src = user.avatar_url;
  img.width = 96;
  img.height = 96;

  const heading = document.createElement("h2");
  heading.textContent = user.name ?? user.login;

  const bio = document.createElement("p");
  bio.textContent = user.bio ?? "No bio";

  const stats = document.createElement("p");
  stats.textContent = `Repos: ${user.public_repos} | Followers: ${user.followers}`;

  const link = document.createElement("a");
  link.href = user.html_url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = "Open profile";

  output.append(img, heading, bio, stats, link);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  output.textContent = "Loading...";

  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error(`User not found (${response.status})`);
    }

    const user = await response.json();
    renderProfile(user);
  } catch (error) {
    output.textContent = error.message;
  }
});
