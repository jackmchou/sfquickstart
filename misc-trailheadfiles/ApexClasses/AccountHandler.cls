public class AccountHandler {
  public static Account insertNewAccount(String accountName) {
      if (accountName != '') {
          try {
         Account acct = new Account(Name=accountName);
          insert acct;
              System.debug('Account Created!');
              return acct;
        } catch (DmlException e){
            System.debug('A DML exception has ocurred: ' + e.getMessage());
           return null;
        }
      } else {
          return null;
      }
  }
}