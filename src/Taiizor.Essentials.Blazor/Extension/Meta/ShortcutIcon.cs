namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class ShortcutIcon
    {
        public static async Task Add(string Path)
        {
            await Interop.Call("Taiizor.Meta.ShortcutIcon.Add", Path);
        }
    }
}