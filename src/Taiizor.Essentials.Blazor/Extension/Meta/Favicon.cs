namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Favicon
    {
        public static async Task Add(string Path)
        {
            await Interop.Call("Taiizor.Meta.Favicon.Add", Path);
        }
    }
}