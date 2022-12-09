<html>
    <p>Greetings from Sociology,</p>
    <p>We received a request to reset the password for the Sociology account associated with this e-mail address. Copy the below Token and paste it on web reset page to reset your password:</p>
    <table>
        @foreach($token as $tk)
        <tr>
            <td>Your Organization name:<b> {{$tk->Name}}</b></td>
        </tr>
        <tr>
            <td>Token:<b> {{$tk->token}}</b></td>
        </tr>
        @endforeach
    </table>
    <p>Thank you for using Sociology.</p>
    <p>Sincerely,<p>
    <p>The Sociology Web Service Team</p>
</html>