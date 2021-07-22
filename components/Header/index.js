import React from 'react'
import { Logo, Head, ListMenu, Button } from './style'

import Link from 'next/link'

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
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/">QUEM SOU</Link></li>
                        <li><Link href="/">TRABALHOS</Link></li>
                        <li><Link href="/">CONTATO</Link></li>
                    </ul>
                </ListMenu>

            </Head>
        </>
    )


}