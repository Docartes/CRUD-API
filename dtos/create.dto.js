class createDTO {
	constructor ( {title, description} ) {
		if ( !title || title.length < 3 ) {
			throw Error(`The length of title must be over 3 character`)
		}

		this.title = title;
		this.description = description ?? null
	}
}

export {
	createDTO
};