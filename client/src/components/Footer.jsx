import{ Footer} from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-black" >
        <div className='w-full mx-auto max-w-7xl'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1 '>
                <div>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white flex'> 
                       <span className='px-2'>Campus Voice</span> 
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjcV87iVBssyJG82vfJCdDwS-rm0zU_YDtA&s" className='w-7 h-6'></img>
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-6 sm:grid-cols-3 sm-gap-6 mx-2'>
                <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            About Us
                            </Footer.Link>
                        </Footer.LinkGroup>
                </div>
                <div>
                        <Footer.Title title='Follow us' />
                        <Footer.LinkGroup col>
                            <div className='flex flex-row gap-2'>
                                <Footer.Icon href='#' icon={BsFacebook}/>
                                <Footer.Link
                                href=''
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                Facebook
                                </Footer.Link>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <Footer.Icon href='#' icon={BsInstagram}/>
                                <Footer.Link
                                href=''
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                Instagram
                                </Footer.Link>
                            </div>
                        </Footer.LinkGroup>
                </div>
                <div>
                        <Footer.Title title='Legel' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>Privacy Policy</Footer.Link>
                            <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='mx-auto '>
                <Footer.Copyright
                    href='#'
                    by="Campus Voice"
                    year={new Date().getFullYear()}
                />
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom