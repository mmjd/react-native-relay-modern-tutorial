/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule App_page.graphql
 * @generated SignedSource<<702f4dc028669cad1713fd948cb806a4>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type App_page = {
  viewer?: ?App_page_viewer;
};

export type App_page_viewer_allSubReddits_edges = {
  node: any;
};

export type App_page_viewer_allSubReddits = {
  edges?: ?Array<?App_page_viewer_allSubReddits_edges>;
};

export type App_page_viewer = {
  allSubReddits?: ?App_page_viewer_allSubReddits;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_page",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "viewer",
      "args": null,
      "concreteType": "Viewer",
      "name": "__viewer_viewer",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "SubRedditConnection",
          "name": "allSubReddits",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "SubRedditEdge",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "SubReddit",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "SubReddit_subreddit",
                      "args": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};

module.exports = fragment;