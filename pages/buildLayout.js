import SigninLayout from '../components/Layout/SigninLayout';
import styled from 'styled-components';

import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import { color, font } from '../components/utils/theme';
import withDefaults from '../lib/withDefaults';

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
`

const OuterMid = styled.div`
    width: 90%;
    max-width: 400px;
`

const OuterItemFooter = styled.div`
    width: 100%;
`

const CardTopArea = styled.div`
    background-color: ${color.primary};
    min-height: 80px;
    position: relative;
`

const CellTxtExit = styled.div`
    font-size: ${font.size1};
    color: ${color.grey1};
    text-align: right;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const CellIcon = styled.div`
    position: absolute;
    top: 5px;
    left: 10px;
    width: 40px;
    height: 40px;
    color: ${color.grey1};
    font-size: 50px;
`;

const CellMain = styled.div`
    position: relative;
    width: calc(95% - 70px);
    top: 0;
    left: 70px;
    padding-top: 20px;
    height: auto;
`
const CellTxtTitle = styled.div`
    color: ${color.grey1};
`

const CellTxtInfo = styled.div`
    color: ${color.grey1};
`

const BuildLayout = () =>
    <SigninLayout title="Login">

        <Outer>
            <OuterMid>
                <div className=" text-center c_margin-bottom-20 c_margin-top-40">
                    <img style={{width: '100%', maxWidth: '200px'}} src="../static/images/logo_full_dark.svg" alt=""/>
                </div>
                <Card>
                    <CardTopArea>
                        <CellMain>
                            <CellTxtTitle>My Account</CellTxtTitle>
                            <CellTxtInfo>Julia von Sithet</CellTxtInfo>
                        </CellMain>

                        <CellIcon>
                            <AccessAlarmIcon fontSize/>
                        </CellIcon>
                        <CellTxtExit>Not me! Click Here</CellTxtExit>

                    </CardTopArea>

                    <CardContent>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <TextField
                                        id="email"
                                        label="Email Address"
                                        value=""
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <TextField
                                        id="password"
                                        label="Password"
                                        value=""
                                        margin="normal"
                                        fullWidth
                                        // TODO: Add ICON
                                        //endAdornment={<InputAdornment position="end">$</InputAdornment>}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    <div className="c_margin-top-40">
                                        <Button variant="raised"
                                                color="primary"
                                                fullWidth>
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm c_margin-top-20 text-center">
                                    Forgot Password
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </OuterMid>
            <OuterItemFooter className="text-center">
                <div className="c_margin-bottom-20">
                    Privacy Statement / Disclaimers / Legal Stuff
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col block`} style={{backgroundColor: color.eGram1}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram2}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram3}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram4}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram5}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram6}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram7}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram8}}/>
                        <div className={`col block`} style={{backgroundColor: color.eGram9}}/>
                    </div>
                </div>
            </OuterItemFooter>
        </Outer>

        <style jsx>{`
            .block {
                height: 3px
            }
        `}</style>
    </SigninLayout>

export default withDefaults(BuildLayout)