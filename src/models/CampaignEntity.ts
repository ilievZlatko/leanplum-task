export enum CampaignStatus {
	DRAFT,
	RUNNING,
	ARCHIVED,
}

export class User {
	name = ''
}

const UNKNOWN_USER = {
	name: 'Unknown',
}

export class CampaignEntity {
	id = 0
	name = ''
	status = CampaignStatus.DRAFT
	author = UNKNOWN_USER
}

export const SAMPLE_DATA: Array<CampaignEntity> = [
	{
		id: 1,
		name: 'Cart Abandonment Campaign',
		status: CampaignStatus.DRAFT,
		author: { name: 'Brando Sando' },
	},
	{
		id: 2,
		name: 'Birthday Coupon Code',
		status: CampaignStatus.RUNNING,
		author: { name: 'John Green' },
	},
	{
		id: 3,
		name: 'Email Course',
		status: CampaignStatus.RUNNING,
		author: { name: 'Hank Green' },
	},
]
