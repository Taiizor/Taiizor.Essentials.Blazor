namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Refresh
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.Refresh.Add", Content);
        }
    }
}