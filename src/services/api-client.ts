import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0d79b884e1194da98704821e8bc8877f'
  }
})
