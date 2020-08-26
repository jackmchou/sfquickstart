public class StringArrayTest {
  public static List<String> generateStringArray(Integer numOfStr) {
      List<String> strings = new List<String>();
      for (Integer i = 0; i < numOfStr; i++) {
          strings.add('Test ' + i);
      }
      return strings;
  }
}