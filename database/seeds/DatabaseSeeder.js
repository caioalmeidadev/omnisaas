
/** @type {import('@adonisjs/lucid/src/Factory')} */

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      password: '123456'
    })

    await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
