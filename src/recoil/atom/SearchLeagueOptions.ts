
import {atom} from 'recoil'
import { AllLeagues, League } from '../../hooks/useAllLeagues'

const SearchLeagueOptions =atom<League[]>({
    key:'searchLeagueOptions',
    default:[]
})

export default SearchLeagueOptions