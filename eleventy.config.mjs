import { feedPlugin } from "@11ty/eleventy-plugin-rss"

export default async function(eleventyConfig) {
	// Add alias for commonly used layouts
	eleventyConfig.addLayoutAlias("base", "layouts/base.liquid")
	eleventyConfig.addLayoutAlias("post", "layouts/post.liquid")

	// Add custom filters to Liquid processor
	eleventyConfig.addLiquidFilter("toSCMPlayer", toSCMPlayer)
	eleventyConfig.addLiquidFilter("toGridStyle", toGridStyle)
	eleventyConfig.addLiquidFilter("groupPostsByYear", groupPostsByYear)
	eleventyConfig.addLiquidFilter("toDateString", toDateString)

	// Add files to pass through directly
	eleventyConfig.addPassthroughCopy("bundle.css")
	eleventyConfig.addPassthroughCopy("images")
	eleventyConfig.addPassthroughCopy("fonts")

	// Configure feed generation plugin
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/atom.xml",
		collection: {
			name: "all",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Kat's Blog",
			subtitle: "A strange being beyond time and space. 👾",
			base: "https://toast.ws/",
			author: {
				name: "Kathrin De Cecco",
			},
		},
	})
}

function toSCMPlayer(playlist) {
	let config = JSON.stringify({
		"skin": "skins/aquaPurple/skin.css",
		"volume": 10,
		"autoplay": false,
		"shuffle": false,
		"repeat": 1,
		"placement": "top",
		"showplaylist": false,
		"playlist": playlist
	})

	return `<script type="text/javascript" src="https://www.scmplayer.net/script.js" data-config='${config}'></script>`
}

function toGridStyle(grid) {
	grid ??= {}
	grid.columns ??= 1

	return `grid-template-columns: repeat(${grid.columns}, minmax(0, 1fr));`
}

function groupPostsByYear(posts) {
	let postsByYears = {}
	let grouped = []

	for (let post of posts) {
		let year = (post.date.getYear() + 1900).toString()

		postsByYears[year] ??= []
		postsByYears[year].push(post)
	}

	let years = Object.keys(postsByYears).sort((a, b) => b - a)

	for (let year of years) {
		grouped.push({
			title: year,
			posts: postsByYears[year].sort((a, b) => b.date - a.date),
		})
	}

	return grouped
}

function toDateString(date) {
	return `${date.getYear() + 1900}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
}
