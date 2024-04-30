import { config, collection, singleton, fields } from '@keystatic/core';

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
	singletons: {
		hp_intro: singleton({
			label: 'Homepage blurb',
			schema: {
				readme: fields.text({label: 'Site intro'})
			}
		})
	},
	collections: {
		events: collection({
			label: 'Events',
			slugField: 'eventName',
			path: 'src/content/events/*',
			format: { contentField: 'description' },
			schema: {
				eventName: fields.slug({ name: { label: 'Event name' } , slug: {label: 'Slug', description: 'The last part of the event page URL. If the slug is summer-flip-frenzy the event page URL will be southslopepinball.com/events/summer-flip-frenzy'}}),
				dek: fields.document({
					label: 'Event description for homepage',
					description: 'The very short version -- like "Five rounds of matchplay and a fundraiser for the Carpal Tunnel Association. 450% WPPRs" or w/e',
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
				description: fields.document({
					label: 'Event description for event page',
					description: 'As long as you want -- full details go here',
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
					description: 'Optional',
					directory: '/static/events'
				}),
				starttime: fields.datetime({
					label: 'Start time'
				}),
				doorstime: fields.datetime({
					label: 'Doors time',
					description: 'Optional'
				}),
				matchplayURL: fields.url({
					label: 'Matchplay',
					description: 'Optional. Full URL for the event, if it exists yet'
				}),
				unlisted: fields.checkbox({
					label: 'Unlisted Event',
					description: "Won't show up in feeds (homepage/series) but the direct link will work"
				}),
				location: fields.relationship({
					label: 'Venue',
					description: "The bar / apartment where the tournament is. If the venue isn't in the list yet click on 'Locations' on the left to add it there",
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
			format: {contentField: 'address' },
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
				),
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