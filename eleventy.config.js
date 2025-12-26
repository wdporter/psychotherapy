export default (config) => {
	config.addPassthroughCopy("src/META-INF")
	//config.addPassthroughCopy("src/acim.css")
	//config.addPassthroughCopy("src/metadata.opf")
	config.addPassthroughCopy("src/mimetype")
	//config.addPassthroughCopy("src/nav.xhtml")
}

export const config = {
	dir: {
		input: "src",
		output: "_ebook"
	}    
}
