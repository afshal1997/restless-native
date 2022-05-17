import React from 'react'
import ListSection03 from './ListSection03'
import { TheVesselSection03ListContent } from './TheVesselPageContent/TheVesselContent'

const ListMap = () => {
    return (
        <>
            {
                React.Children.toArray(
                    TheVesselSection03ListContent.map((data) => {
                        return (
                            <ListSection03 {...data} />
                        )
                    })
                )
            }
        </>
    )
}

export default ListMap