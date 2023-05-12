const LIST_TYPES = {
	BACKLOG: 'backlog',
	IN_PROGRESS: 'inProgress',
	DONE: 'done',
	FOUR: 'finished'
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.DONE]: 'Done',
	[LIST_TYPES.FOUR]: 'Finished',
}

export { LIST_TYPES, LIST_COPY }