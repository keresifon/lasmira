/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions


    if(page.path.match(/ˆ\/account/)) {
        page.matchPath = "/account/*"

        createPage(page)
    }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if(stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /auth0-js/,
                        use: loaders.null(),
                    }
                ]
            }
        })
    }
}