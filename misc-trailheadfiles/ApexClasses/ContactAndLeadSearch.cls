public class ContactAndLeadSearch {
  public static List<List<SObject>> searchContactAndLeads(String fullName) {
      List<List<SObject>> result = [FIND :fullName IN NAME FIELDS
                                   RETURNING Contact(LastName), Lead(LastName)];
      return result;
  }
}