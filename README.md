### Update process

After version bumps in `frontend/generation/package.json` and `frontend/package.json`

* remove `frontend/node_modules`, `frontend/generation/node_modules`, `frontend/generation/generators` directories
* run `npm i` in `frontend` and `frontend/generation/`
* reopen project in studio