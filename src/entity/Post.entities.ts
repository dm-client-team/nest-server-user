import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class UserInfo {
    @PrimaryColumn()
    id: string

    @Column({length: 50 })
    nickname: string

    @Column({length: 50 })
    avatar: string

    @Column({length: 50})
    account: string

    @Column({length: 50 })
    phone: string

    @Column({length: 50 })
    token: string

    @Column({ type: 'datetime' })
    create_time: Date = new Date()

    @Column({ type: 'datetime' })
    update_time: Date = new Date()
}