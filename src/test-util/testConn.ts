export const testConn = (drop: boolean = false) => {
    return {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'test',
        database: 'test-example',
        synchronize: drop,
        dropSchema: drop,
        entities: [__dirname + '/../entity/*.*'],
    }
}