import React, { Component } from 'react';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import '../styles/_scss/_themes/_light.scss';

const Index = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Button label="Click" icon="pi pi-check" />
        </div>
    );
};

export default Index;