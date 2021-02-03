interface IVerifyAccountEmailTemplate {
  token: string
  userType: 'CUSTOMER' | 'RESTAURANT'
}

const verifyAccountEmailTemplate = ({ token, userType }: IVerifyAccountEmailTemplate) => 
  `<p style="background-color:#f0f0f0;padding: 2rem;font-size: 1.2rem;color: #000;text-align: center;">
    Você está quase pronto! Agora é só clicar no link abaixo para verificar seu cadastro e começar a aproveitar a plataforma.
    <br>
    <br>
    <a href='http://localhost:3333/${userType.toLowerCase()}s/verify?token=${token}' style="padding: 12px 24px;background-color:#f87652;color:#fff;border-radius: 6px;text-decoration: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3333/customer/verify?token%3Ddb891d91-aac6-4f8c-ae5f-f20f6cc7f79f&amp;source=gmail&amp;ust=1610320429495000&amp;usg=AFQjCNEGK8EsrpAtInR0Vo8YusdGS3LkSQ">
      Verificar cadastro
    </a>
  </p>`

const newAccessEmailTemplate =
  `<p style="background-color:#f0f0f0;padding: 2rem;font-size: 1.2rem;color: #000;text-align: center;">
    Por motivos de segurança estamos passando pra avisar que houve um novo acesso na sua conta agora mesmo.
    <br>
    <br>
    Atenciosamente, Equipe OpaFood.
  </p>`

const resetPasswordEmailTemplate = (token: string) => 
  `<p style="background-color:#f0f0f0;padding: 2rem;font-size: 1.2rem;color: #000;text-align: center;">
    Para redefinir sua senha no OpaFood clique no link abaixo.
    <br>
    <br>
    <a href='http://localhost:3000/redefinir-senha?token=${token}' style="padding: 12px 24px;background-color:#f87652;color:#fff;border-radius: 6px;text-decoration: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3333/customer/verify?token%3Ddb891d91-aac6-4f8c-ae5f-f20f6cc7f79f&amp;source=gmail&amp;ust=1610320429495000&amp;usg=AFQjCNEGK8EsrpAtInR0Vo8YusdGS3LkSQ">
      Redefinir minha senha
    </a>
  </p>`

export { verifyAccountEmailTemplate, newAccessEmailTemplate, resetPasswordEmailTemplate }