import { Column, Entity } from "typeorm";

import { CustomBaseEntity } from "./custom-base.entity";

@Entity({ name: "rcon_unique_id_logic", schema: "dbo" })
export class UniqueIdLogicEntity extends CustomBaseEntity {
	@Column({
		type: "varchar",
		name: "id_for",
		nullable: false,
	})
	idFor: string;

	@Column({
		type: "int",
		name: "id_length",
		nullable: false,
	})
	idLength: number;

	@Column({
		type: "varchar",
		name: "id_format",
		nullable: true,
	})
	idFormat: string;

	@Column({
		type: "varchar",
		name: "token_reset_logic",
		nullable: true,
	})
	tokenResetLogic: string;

	@Column({
		type: "int",
		name: "starting_id",
		nullable: false,
	})
	startingId: number;

	@Column({
		type: "int",
		name: "last_gen_id",
		nullable: true,
	})
	lastGenId: number;

	@Column({
		type: "bit",
		name: "reset_flag",
		nullable: true,
	})
	resetFlag: Boolean;
}
