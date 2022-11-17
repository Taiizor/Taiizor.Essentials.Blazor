namespace Taiizor.Essentials.Blazor.Helper
{
    public class Combine
    {
        public static string FullPath(string Directory, string File, string Extension)
        {
            return Path.Combine(Directory, $"{File}{Extension}");
        }
    }
}