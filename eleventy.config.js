export default (config) => {
	config.addPassthroughCopy("src/mimetype")
	config.addPassthroughCopy("src/META-INF")
}

export const config = {
	dir: {
		input: "src",
		output: "_ebook"
	}    
}
