import Adapter from '../../../adapter';
import HotelUserCurrencyDB from './user_currency';
import HotelUserSettingsDB from './user_settings';

class HotelUserDB extends Adapter.Model
{
	get tableName()
	{
		return 'users';
	}

	get hasTimestamps()
	{
		return false;
	}

	currency()
	{
		return this.hasMany('HotelUserCurrencyDB', 'user_id', 'id');
	}

	settings()
	{
		return this.hasOne('HotelUserSettingsDB', 'user_id', 'id');
	}
}

export default Adapter.model('HotelUserDB', HotelUserDB);