# Dushime Alimence | IT Portfolio

A responsive, dependency-free portfolio website for Dushime Alimence. The site uses semantic HTML, CSS, and vanilla JavaScript and is designed to deploy as a static site on GitHub Pages.

## Run locally

No build step or package installation is required. Open `index.html` directly in a browser, or serve this folder using a local static server. For example, with PHP installed:

```sh
php -S localhost:8000
```

Then visit `http://localhost:8000`. The included portfolio also works under XAMPP by placing the folder in `htdocs` and opening it through localhost.

For this workspace location, start Apache from the XAMPP Control Panel and visit `http://localhost/PORTIFOLIO/`.

## Edit the content

- Update profile details, section copy, project descriptions, and links in `index.html`.
- Adjust colors, typography, spacing, and responsive breakpoints in `style.css`.
- Add, remove, or edit projects in `projects.js`; the site creates the matching cards automatically. Keep each project object in the same format as the existing entries.
- To use a real screenshot, copy the image into `assets/images/`, set `visual.kind` to `image`, and set `visual.src` to its relative path (for example `assets/images/my-project.png`). Write meaningful `visual.alt` text. Don't use concept art as proof of deployment.
- A project without a screenshot can use `visual.kind: 'panel'` with a short `kicker`, `heading`, and `stack`; this creates a text-based overview rather than a pretend screenshot.
- In each project object, edit `title`, `subtitle`, `description`, `status`, `details`, `visual`, and `repository` as needed. Set `repository` to `null` until its public URL is verified. For a private or unavailable repo, don't add a clickable link.
- `details` accepts feature lists (`items`), contribution/status text (`text`, with `kind: 'contribution'`), and technology tags (`items`, with `kind: 'technologies'`). Add only verified facts.
- Navigation, active-section state, project rendering, reveal behavior, and footer year are handled in `script.js`.

### Add a project

Add another object to the `window.portfolioProjects` array in `projects.js` before its closing `];`. This is a minimal entry with a real screenshot and repository link:

```js
{
	number: '05',
	reverse: false,
	status: 'In development',
	statusType: 'progress',
	category: 'WEB APPLICATION',
	title: 'Your project title',
	subtitle: 'One-line project summary',
	description: 'A short, accurate description of the project.',
	visual: {
		kind: 'image',
		src: 'assets/images/your-project.png',
		alt: 'Describe what the screenshot shows',
		label: '05 / IN DEVELOPMENT',
		note: 'Project screenshot',
	},
	details: [
		{ heading: 'Features', items: ['Feature one', 'Feature two'] },
		{ heading: 'My contribution', text: 'Describe only your confirmed work.', kind: 'contribution' },
		{ heading: 'Technologies', items: ['JavaScript', 'MySQL'], kind: 'technologies' },
	],
	repository: { href: 'https://github.com/your-account/your-repo', label: 'View public repository' },
},
```

For a project without an image, set `visual.kind` to `panel` and provide `kicker`, `heading`, and `stack` instead of `src` and `alt`. Set `repository` to `null` and optionally add `repositoryLabel` until its URL is verified. Use the next sequential `number`; the future-project counter updates automatically.
- Replace the clearly labeled illustrative project previews in `assets/images/` with approved screenshots when available. They are concept visuals, not actual screenshots or evidence of deployment.
- The verified public heritage repository is linked from the Kibaza project card. Add only responsibilities and contribution details that can be confirmed.
- The `mahama` project card summarizes the public repository's user manual and package manifests; it does not claim a hosted deployment or unconfirmed personal contributions.
- The supplied rice health repository URL currently returns not found; add it to the portfolio once the repository is public and the URL is verified.
- The supplied `ALUMNI` repository URL currently returns not found; add it once the repository is public and the URL is verified.
- To enable the CV download manually, put the PDF in `assets/documents/` and set `window.portfolioCv` near the top of `projects.js` to `{ href: 'assets/documents/your-cv.pdf', filename: 'your-cv.pdf' }`. Leave it as `null` to keep the placeholder visible.
- Add verified certification details in the Education section when available.
- The favicon is a simple initials placeholder at `assets/icons/favicon.svg`.

The project intentionally does not include a contact form because there is no message-delivery backend. Contact is via the email link.

## Deploy to GitHub Pages

1. Create a GitHub repository for the website. For a personal site, use the repository name `Alimence-dev.github.io`; for a project repository, any name is fine.
2. From this project directory, initialize and push the site:

```sh
git init
git add .
git commit -m "Build Dushime Alimence portfolio"
git branch -M main
git remote add origin https://github.com/Alimence-dev/Alimence-dev.github.io.git
git push -u origin main
```

For a project repository, change the remote URL to that repository's URL. Then open the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, and save. GitHub will show the published URL in the Pages settings. The root-relative asset references are kept relative so they also work when served from a project subpath.

To publish later changes:

```sh
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages serves `404.html` as the not-found page. No server-side features or build pipeline are required.