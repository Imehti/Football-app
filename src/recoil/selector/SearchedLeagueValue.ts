import { selector } from 'recoil'
import SearchLeagueOptions from '../atom/SearchLeagueOptions'
const searchedLeagueValue =selector({
    key:'SearchedLeagueValue',
    get:({get}) => {
        const searchedValue=get(SearchLeagueOptions)
        return searchedValue
    }
})

export default searchedLeagueValue