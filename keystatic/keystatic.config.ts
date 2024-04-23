import { config, collection, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'cloud'
	},
	cloud: {
		project: 'south-slope-pinball/southslopepinball'
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
					label: 'Description'
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
				})
			}
		}),
		locations: collection({
			label: 'Locations',
			slugField: 'locationName',
			path: 'src/content/venues/*',
			schema: {
				locationName: fields.slug({ name: { label: 'Venue name' } }),
				address: fields.text({
					label: 'Address'
				}),
				url: fields.url({
					label: 'Matchplay',
					description: 'Link to google maps or something'
				}),
				private: fields.checkbox({
					label: 'Private location',
					description: "Don't show address"
				}),
				authors: fields.array(
					fields.relationship({
					  label: 'Machines',
					  description: 'Which machines are at this venue',
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
			schema: {
				machineName: fields.slug({ name: { label: 'Machine name' } })
			}
		})
	}
});
