// import { DataSource } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';

export const UserDataSource = TypeOrmModule.forRoot({
    type: "better-sqlite3",
    database: "./sqlite/main.sqlite",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entity/*.js"],
    subscribers: [],
    migrations: [],
})