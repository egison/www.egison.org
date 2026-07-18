www.egison.org
==============

Egison Web Site

Mathematics pages under `math/` embed static HTML rendered from the executed
notebooks in the sibling `egison-jupyter` repository. Regenerate and verify the
41 SSI content fragments with:

```sh
../egison-jupyter/.venv/bin/python tools/render_math_notebooks.py
../egison-jupyter/.venv/bin/python tools/render_math_notebooks.py --check
```

For a standalone environment, install the pinned renderer dependencies from
`tools/requirements-math-notebooks.txt` and pass `--notebook-dir` when the
notebooks are not in `../egison-jupyter/math`.
