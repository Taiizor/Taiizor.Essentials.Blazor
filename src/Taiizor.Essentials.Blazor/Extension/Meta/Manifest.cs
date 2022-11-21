namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Manifest
    {
        public static async Task Add(string Path)
        {
            await Interop.Call("Taiizor.Meta.Manifest.Add", Path);
        }
    }
}