namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Canonical
    {
        public static async Task Add(string Path)
        {
            await Interop.Call("Taiizor.Meta.Canonical.Add", Path);
        }
    }
}