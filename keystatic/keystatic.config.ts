import { config, collection, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'cloud'
	},
	cloud: {
		project: 'south-slope-pinball/southslopepinball'
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/posts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true
				})
			}
		}),		
		others: collection({
			label: 'Posts2',
			slugField: 'title',
			path: 'src/content/posts2/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true
				})
			}
		})
	}
});
