www.egison.org
==============

Egison Web Site

Mathematics pages under `math/` and `ja/math/` embed static HTML rendered from
the executed notebooks in the sibling `egison-jupyter` repository. Regenerate
and verify the English and Japanese SSI content fragments with:

```sh
../egison-jupyter/.venv/bin/python tools/render_math_notebooks.py --locale en
../egison-jupyter/.venv/bin/python tools/render_math_notebooks.py --locale ja
../egison-jupyter/.venv/bin/python tools/render_math_notebooks.py --locale all --check
```

For a standalone environment, install the pinned renderer dependencies from
`tools/requirements-math-notebooks.txt` and pass `--notebook-dir` when the
notebooks are outside the locale's default sibling directory.
