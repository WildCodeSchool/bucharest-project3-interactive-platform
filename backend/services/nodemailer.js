const nodemailer = require("nodemailer");


const sendNodemailer = (toEmail, code, discount) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'acc.markets.hack@gmail.com',
            pass: 'Hack2020'
        }
    });
    const mailOptions = {
        // sender address
        from: 'sendemailslecture@gmail.com',

        // user’s email from input field
        to: toEmail,

        // subject of the email
        subject: 'Cuponul tau de la Techir',

        // email message content
        html:
            // '<div class=lala style={{background-color: #008000 }}>TEXT</div>'
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
            '<html>\n' +
            '<link type="text/css" id="dark-mode" rel="stylesheet" href>\n' +
            '<style type="text/css" id="dark-mode-custom-style"></style>\n' +
            '\n' +
            '<head>\n' +
            '    <link type="text/css" id="dark-mode" rel="stylesheet" href>\n' +
            '    <style type="text/css" id="dark-mode-custom-style"></style>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
            '    <meta name="x-apple-disable-message-reformatting">\n' +
            '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
            '    <meta content="telephone=no" name="format-detection">\n' +
            '    <title></title>\n' +
            '    <!--[if (mso 16)]>\n' +
            '    <style type="text/css">\n' +
            '    a {text-decoration: none;}\n' +
            '    </style>\n' +
            '    <![endif]-->\n' +
            '    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->\n' +
            '</head>\n' +
            '\n' +
            '<body>\n' +
            '    <div class="es-wrapper-color">\n' +
            '        <!--[if gte mso 9]>\n' +
            '\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">\n' +
            '\t\t\t\t<v:fill type="tile" color="#555555"></v:fill>\n' +
            '\t\t\t</v:background>\n' +
            '\t\t<![endif]-->\n' +
            '        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">\n' +
            '            <tbody>\n' +
            '                <tr>\n' +
            '                    <td class="esd-email-paddings" valign="top">\n' +
            '                        <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">\n' +
            '                            <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td class="esd-stripe" align="center">\n' +
            '                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center">\n' +
            '                                            <tbody>\n' +
            '                                                <tr>\n' +
            '                                                    <td class="esd-structure es-p20t es-p20b es-p10r es-p10l" style="background-color: rgb(255, 255, 255);" esd-general-paddings-checked="false" bgcolor="#ffffff" align="left">\n' +
            '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="580" valign="top" align="center">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-image" align="center"><a target="_blank" href="http://www.techir.ro/"><img class="adapt-img" src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" alt width="205" style="display: block;"></a></td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                                <tr>\n' +
            '                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" esd-general-paddings-checked="false" style="background-color: rgb(255, 204, 153);" bgcolor="#ffcc99" align="left">\n' +
            '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text es-p15t es-p15b" align="center">\n' +
            '                                                                                        <div class="esd-text">\n' +
            '                                                                                            <h2 style="color: #242424;"><span style="font-size: 30px;"><b>Felicitari, ai castigat!!!</b></span></h2>\n' +
            '                                                                                        </div>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text es-p10l" align="center">\n' +
            '                                                                                        <p style="color: #242424;">Salut, si multumim pentru testul facut. Te anuntam prin acest mesaj ca ai castigat o reducere de ' + discount.toString() + ' % pentru produsele vandute pe site-ul nostru. Codul tau de reducere este <em>' + code.toString() + '</em>, foloseste-l acum!!!</p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-button es-p15t es-p15b es-p10r es-p10l" align="center"><span class="es-button-border" style="border-radius: 20px; background: rgb(25, 25, 25) none repeat scroll 0% 0%; border-style: solid; border-color: rgb(44, 181, 67); border-width: 0px;"><a href="http://techir.ro/" class="es-button" target="_blank" style="border-radius: 20px; font-family: lucida sans unicode,lucida grande,sans-serif; font-weight: normal; font-size: 18px; border-width: 10px 35px; background: rgb(25, 25, 25) none repeat scroll 0% 0%; border-color: rgb(25, 25, 25); color: rgb(255, 255, 255);">Acceseaza Techir.ro</a></span></td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                                <tr>\n' +
            '                                                    <td class="esd-structure es-p10t es-p10b es-p10r es-p10l" style="background-color: rgb(248, 248, 248);" esd-general-paddings-checked="false" bgcolor="#f8f8f8" align="left">\n' +
            '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="580" valign="top" align="center">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-spacer es-p20t es-p20b es-p10r es-p10l" bgcolor="#f8f8f8" align="center">\n' +
            '                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">\n' +
            '                                                                                            <tbody>\n' +
            '                                                                                                <tr>\n' +
            '                                                                                                    <td style="border-bottom: 1px solid rgb(25, 25, 25); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>\n' +
            '                                                                                                </tr>\n' +
            '                                                                                            </tbody>\n' +
            '                                                                                        </table>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                                <tr>\n' +
            '                                                     <td class="esd-structure es-p15t es-p10b es-p10r es-p10l" style="background-color: rgb(238, 238, 238);" esd-general-paddings-checked="false" bgcolor="#eeeeee" align="left">\n' +
            '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="580" valign="top" align="center">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text" align="center">\n' +
            '                                                                                        <h2 style="color: #191919;">Linkuri utile</h2>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                                <tr>\n' +
            '                                                    <td class="esd-structure es-p25t es-p30b es-p20r es-p20l" esd-general-paddings-checked="false" style="background-color: rgb(248, 248, 248);" bgcolor="#f8f8f8" align="left">\n' +
            '                                                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->\n' +
            '                                                        <table class="es-left" cellspacing="0" cellpadding="0" align="left">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="es-m-p20b esd-container-frame" width="270" align="left">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text es-p10b" align="center">\n' +
            '                                                                                        <h3 style="color: rgb(36, 36, 36);">Suntem aici sa va ajutam</h3>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td align="center" class="esd-block-text">\n' +
            '                                                                                          <p style="line-height: 150%; color: #242424;">Sunati-ne la <a target="_blank" style="line-height: 150%; " href="tel:0799832447">0799 832 447</a> sau <a target="_blank" href="http://www.techir.ro/">vizitati pagina noastra</a></p>\n' +
            '                                                                                        <p style="line-height: 150%; color: #242424;">pentru asistenta profesionala.</p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                        <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->\n' +
            '                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="270" align="left">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text es-p10b" align="center">\n' +
            '                                                                                        <h3 style="color: rgb(36, 36, 36);">Garantia noastra</h3>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text" align="center">\n' +
            '                                                                                        <p style="line-height: 150%; color: #242424;">Satisfactia dvs. 100% garantata</p>\n' +
            '                                                                                        <p style="line-height: 150%; color: #242424;">Cititi <a target="_blank" href="http://www.techir.ro/termeni-si-conditii/">Termenii si conditiile.</a></p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                        <!--[if mso]></td></tr></table><![endif]-->\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                            </tbody>\n' +
            '                                        </table>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </tbody>\n' +
            '                        </table>\n' +
            '                        <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover es-visible-simple-html-only" align="center">\n' +
            '                            <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td class="esd-stripe" align="center" esd-custom-block-id="88703">\n' +
            '                                        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">\n' +
            '                                            <tbody>\n' +
            '                                                <tr>\n' +
            '                                                    <td class="esd-structure es-p20" esd-general-paddings-checked="false" align="left">\n' +
            '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                            <tbody>\n' +
            '                                                                <tr>\n' +
            '                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">\n' +
            '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
            '                                                                            <tbody>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-social es-p10t es-p20b" align="center">\n' +
            '                                                                                        <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">\n' +
            '                                                                                            <tbody>\n' +
            '                                                                                                <tr>\n' +
            '                                                                                                    <td class="es-p15r" valign="top" align="center"><a href><img title="Twitter" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/circle-gray/twitter-circle-gray.png" alt="Tw" width="32" height="32"></a></td>\n' +
            '                                                                                                    <td class="es-p15r" valign="top" align="center"><a href><img title="Facebook" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/circle-gray/facebook-circle-gray.png" alt="Fb" width="32" height="32"></a></td>\n' +
            '                                                                                                    <td class="es-p15r" valign="top" align="center"><a href><img title="Youtube" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/circle-gray/youtube-circle-gray.png" alt="Yt" width="32" height="32"></a></td>\n' +
            '                                                                                                    <td valign="top" align="center"><a href><img title="Linkedin" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/circle-gray/linkedin-circle-gray.png" alt="In" width="32" height="32"></a></td>\n' +
            '                                                                                                </tr>\n' +
            '                                                                                            </tbody>\n' +
            '                                                                                        </table>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text" align="center">\n' +
            '                                                                                        <p><b>Contact:</b></p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr style="color: #FFFFFF">\n' +
            '                                                                                    <td align="center" class="esd-block-text es-p20t es-p20b" style="background-color: #544242">\n' +
            '                                                                                        <p>SC TECHIRGHIOL FARMA COSMETICS SRL</p>\n' +
            '                                                                                        <p>Telefon: 0799 832 447</p>\n' +
            '                                                                                        <p>Email: office@techir.ro</p>\n' +
            '                                                                                        <p>Nr. ord. Reg. com./aut.: J13-1885-2012</p>\n' +
            '                                                                                        <p>Cod inregistrare fiscala: RO30601045</p>\n' +
            '                                                                                        <p>Cod CAEN 2042: Fabricarea parfumurilor si a produselor cosmetice</p>\n' +
            '                                                                                        <p>Sediu social: Strada Plantelor, nr 19, comuna Agigea, judetul Constanta</p>\n' +
            '                                                                                        <p>Punct de lucru: Strada Plantelor, nr 19, comuna Agigea, judetul ConstantaCod IBAN: RO76BRDE140SV33415771400BRD AGENTIA FARULUI CONSTANTA</p>\n' +
            '                                                                                        <p>Va multumim pentru interes si incredere!</p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td align="center" class="esd-block-text">\n' +
            '                                                                                        <p><strong><a target="_blank" style="line-height: 150%;" class="unsubscribe" href>Unsubscribe</a> • <a target="_blank" style="line-height: 150%;" href="https://viewstripo.email">Update Preferences</a> • <a target="_blank" style="line-height: 150%;" href="https://viewstripo.email">Customer Support</a></strong></p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                                <tr>\n' +
            '                                                                                    <td class="esd-block-text es-p10t es-p10b" align="center">\n' +
            '                                                                                        <p><em><span style="font-size: 11px; line-height: 150%;">You are receiving this email because you have visited our site or asked us about regular newsletter</span></em></p>\n' +
            '                                                                                    </td>\n' +
            '                                                                                </tr>\n' +
            '                                                                            </tbody>\n' +
            '                                                                        </table>\n' +
            '                                                                    </td>\n' +
            '                                                                </tr>\n' +
            '                                                            </tbody>\n' +
            '                                                        </table>\n' +
            '                                                    </td>\n' +
            '                                                </tr>\n' +
            '                                            </tbody>\n' +
            '                                        </table>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </tbody>\n' +
            '                        </table>\n' +
            '                    </td>\n' +
            '                </tr>\n' +
            '            </tbody>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</body>\n' +
            '\n' +
            '</html>'
    };
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Mail sent.");
        }

        transporter.close();
    });

    // const myMailOptions = {
    //     from: 'sendemailslecture@gmail.com', // sender address
    //     to: toEmail, // list of receivers
    //     subject: 'Email Confirmation',
    //     html: '<p>Yes it did</p>'
    // };

    // transporter.sendMail(myMailOptions, (error, response) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Message sent.");
    //     }
    //     transporter.close();
    // })
};

module.exports = sendNodemailer;
