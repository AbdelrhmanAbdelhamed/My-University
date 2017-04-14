import { User } from '../user/user';
import { SEntity } from '../core/s-entity';

/**
 */
export class Notification extends SEntity {

	title: string;
	message: string;
	sender: User;
	recipient: User;
	priority: number;
	isRead: boolean;

	constructor() {
		super();
		this.priority = 0;
		this.isRead = false;
	}
}
