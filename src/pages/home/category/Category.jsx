import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {

    const {ID} = useParams()

    return (
        <div>
            <div>This is a category . Id = {ID}</div>
        </div>
    );
};

export default Category;