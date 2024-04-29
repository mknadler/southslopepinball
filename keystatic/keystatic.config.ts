import { config, collection, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'cloud'
	},
	cloud: {
		project: 'south-slope-pinball/southslopepinball'
	},
	ui: {
		brand: { name: 'South Slope Pinball'}
	},
	collections: {
		events: collection({
			label: 'Events',
			slugField: 'eventName',
			path: 'src/content/events/*',
			format: { contentField: 'description' },
			schema: {
				eventName: fields.slug({ name: { label: 'Event name' } }),
				description: fields.document({
					label: 'Long event description (for event page) (optional)',
					formatting: {
						inlineMarks: {
							bold: true,
							italic: true
						},
						listTypes: {
							unordered: true,
							ordered: true
						},
					},
					links: true
				}),
				dek: fields.document({
					label: 'Dek / short description (for homepage feed) (optional)',
					formatting: {
						inlineMarks: {
							bold: true,
							italic: true
						},
						listTypes: {
							unordered: true,
							ordered: true
						},
					},
					links: true
				}),
				image: fields.image({
					label: 'Image',
					directory: '/static/events'
				}),
				starttime: fields.datetime({
					label: 'Start time'
				}),
				doorstime: fields.datetime({
					label: 'Doors time'
				}),
				matchplayURL: fields.url({
					label: 'Matchplay',
					description: 'Matchplay url'
				}),
				unlisted: fields.checkbox({
					label: 'Unlisted',
					description: "Won't show up on homepage but url still works"
				}),
				location: fields.relationship({
					label: 'Venue',
					description: 'The venue for the event',
					collection: 'locations'
				}),
				series: fields.relationship({
					label: 'Series/League',
					description: 'The series or league this belongs to',
					collection: 'series'
				})
			}
		}),
		series: collection({
			label: 'Series/League',
			slugField: 'seriesSlug',
			path: 'src/content/series/*',
			format: {contentField: 'description' },
			schema: {
				seriesSlug: fields.slug({ name: { label: 'Series/league name (required)' } }),
				url: fields.url({
					label: 'Matchplay series URL (optional)',
					description: 'Link to Matchplay series (optional)'
				}),
				description: fields.document({
					label: 'Main series description',
					formatting: {
						inlineMarks: {
							bold: true,
							italic: true
						},
						listTypes: {
							unordered: true,
							ordered: true
						},
					},
					links: true
				}),
			}
		}),
		locations: collection({
			label: 'Locations',
			slugField: 'locationName',
			path: 'src/content/locations/*',
			schema: {
				locationName: fields.slug({ name: { label: 'Venue name' } }),
				url: fields.url({
					label: 'URL',
					description: 'Link to google maps or something'
				}),
				address: fields.document({
					label: 'Address',
					formatting: {},
				}),
				private: fields.checkbox({
					label: 'Private location',
					description: "Don't show address (optional)"
				}),
				machines: fields.array(
					fields.relationship({
					  label: 'Machines',
					  description: 'Which machines are at this venue (optional)',
					  collection: 'machines'
					}), {
					  label: 'Machines',
					  itemLabel: props => props.value || ''
					}
				  )
			}
		}),
		machines: collection({
			label: 'Machines',
			slugField: 'machineName',
			path: 'src/content/machines/*',
			format: {contentField: 'content'},
			schema: {
				machineName: fields.slug({ name: { label: 'Machine name' } }),
				content: fields.document({ label: 'description'})
			}
		})
	}
});
