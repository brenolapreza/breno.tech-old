import React from 'react'
import { Logo, Head, ListMenu, Button } from './style'

export default function Header() {

    const [open, setOpen] = React.useState(false);


    return (
        <>
            <Head open={open}>
                <div>
                    <Logo href="/">B</Logo>
                </div>
                <div>
                    <Button onClick={() => setOpen(!open)}>
                        <div className="rotate x3"/>
                        <div className="rotate x2"/>
                        <div className="rotate x1"/>
                    </Button>
                </div>
                <ListMenu>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">QUEM SOU</a></li>
                        <li><a href="/">TRABALHOS</a></li>
                        <li><a href="/">CONTATO</a></li>
                    </ul>
                </ListMenu>

            </Head>
        </>
    )


}