class updateDTO {
	constructor ({title, description, status}) {
		if ( title < 3 && title ) {
			throw Error(`Title is to shorts`)
		}

		if ( status && !['PENDING', 'IN-PROGRESS', 'DONE'].includes(status) ) {
			throw Error(`Invalid Status`)
		}


		this.title = title;
		this.description = description;
		this.status = status;
	}
}

export {
	updateDTO
};