export default ({ env }) => ({
	connection: {
		client: "mysql",
		connection: {
		host: env("DATABASE_HOST", "localhost"),
			port: env.int("DATABASE_PORT", 3306),
			database: env("DATABASE_NAME", "valon-kaupunki-api"),
			user: env("DATABASE_USERNAME", "admin"),
			password: env("DATABASE_PASSWORD", "admin"),
			ssl: env.bool("DATABASE_SSL", false)
		}
	}
});
