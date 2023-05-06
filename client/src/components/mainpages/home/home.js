import React from 'react'
import Banner from '../../common/Banner'
import FlatList from '../../common/FlatList'
import BestFlatList from '../../common/BestFlatList'
import TeamList from '../../common/TeamList'

const Home = ({user}) => {
    return (
        <React.Fragment>
            <Banner />
            <FlatList />
          {/*   <BestFlatList />
            <TeamList /> */}
        </React.Fragment>
    )
}

export default Home;