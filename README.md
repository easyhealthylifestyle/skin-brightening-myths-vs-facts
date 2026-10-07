# Skin Supplement Claim Checker: Myths vs. Facts

An interactive, single-page site that helps readers test six common claims about skin-brightening supplements and see what the research actually supports.

Each claim asks the reader to decide whether it holds up. After answering, a short, evidence-based explanation appears, covering topics such as:

- Why no supplement can permanently change natural skin tone
- Realistic timelines for oral supplements (typically 8 to 12 weeks in studies)
- How glutathione, vitamin C, and collagen peptides differ
- Why daily sunscreen remains essential
- How dietary supplements are regulated in the U.S.

The page is built around one principle: every skin tone is healthy skin. The goal is skin health, not skin color.

## Live site

Once GitHub Pages is enabled, the site will be available at:

`https://<your-username>.github.io/skin-brightening-myths-vs-facts/`

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | Layout, typography, and responsive styles |
| `script.js` | Answer handling, verdict reveal, and score tally |
| `README.md` | Project overview |

No build step and no dependencies. The only external resource is Google Fonts (Literata and Atkinson Hyperlegible).

## Run locally

Clone the repository and open `index.html` in any modern browser.

## Deploy with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
4. The site will be published within a few minutes.

## Accessibility

- Keyboard accessible, with visible focus styles
- Verdicts announced to screen readers via `aria-live`
- Motion limited to the verdict reveal and disabled when the reader prefers reduced motion
- Responsive down to small mobile screens

## Further reading

For the full breakdown with research references, see the [guide to skin-brightening supplement myths](https://www.nubest.com/blogs/beauty-care/pills-that-lighten-skin).

## Disclaimer

This project is for educational purposes only and is not medical advice. These statements have not been evaluated by the Food and Drug Administration. Talk to your doctor or a dermatologist before starting any supplement.
