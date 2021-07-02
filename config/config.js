const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "ac_JmL7Yw2O0Sj4deaMIYl924rYJvjvJzK1",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
    stripe_connect_test_client_id: 'ca_JmKqJVmjzttrMOq48ajmvZBv7faVe1kZ',
    stripe_test_secret_key: 'sk_test_51J8lyvEvOS8HIY3ntQ93S44PkK8Js8oEFjnpzwsiUT7PuWOGrzQd2a5vNMhRJ3ZBik2bUZYWurZ5woHPTldtpwb600ERdR87B5',
    stripe_test_api_key: 'pk_test_51J8lyvEvOS8HIY3n3EOgEWdv59HffVdEwQmHEDYMlpvD3ijRoUhXjp9BGZ1yUnmmYpmtvw5GZIhZvqd9Rly5vDlP00fcqiNnc0',
  
}

export default config
