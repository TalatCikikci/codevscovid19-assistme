import React, { Fragment } from 'react';

import RequesterList from "./RequesterList";
import RequesterListForm from "./RequesterListForm";


export default function RequesterMain() {
    return (
        <Fragment>
            <RequesterList/>
            <RequesterListForm/>
        </Fragment>
    )
}