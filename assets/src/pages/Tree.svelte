<script>

  import { Checkbox, Card ,Switch,FormGroup,Label,TreeViewWSearch,PageHeader,BreadcrumbItem} from "svelte-adminlte";
  import { _ } from "svelte-i18n";

  let tree = [
    { nodePath: "1", title: "1", __visual_state: "indeterminate" },
    { nodePath: "2", title: "2" },

    { nodePath: "3", title: "3", hasChildren: true, __expanded: true },
    { nodePath: "3.1", title: "Hecarim" },
    { nodePath: "3.2", 
    title: "3.2", 
    hasChildren: true,
     __expanded: false },
    {
      nodePath: "3.2.2",
      title: "Visage",
      __expanded: true,
      __selected: true,
      test: "test223",
    },
    {
      nodePath: "3.2.3",
      title: "Lycan",
      __expanded: true,
      __selected: true,
      test: "test223",
    },
    {
      nodePath: "3.2.4",
      title: "Bloodseeker",
      __expanded: true,
      __selected: true,
    },

    { nodePath: "3.3", title: "3.3", hasChildren: true, __expanded: true },

    {
      nodePath: "3.3.1",
      title: "3.3.1",
      __expanded: true,
      __selected: false,
    },
    { nodePath: "3.4", title: "	Omniknight" },

    { nodePath: "4", title: "	Necrophos" },
    { nodePath: "5", title: "	Underlord" },

    { nodePath: "6", title: "6", hasChildren: true },
    { nodePath: "6.1", title: "6.1", hasChildren: true },
    { nodePath: "6.1.1", title: "	Death Prophet", __selected: true },

    { nodePath: "6.1.2", title: "Outworld Destroyer" },
    { nodePath: "6.1.3", title: "Puck" },
    { nodePath: "6.2", title: "6.2", hasChildren: true },

    { nodePath: "6.2.1", title: "6.2.1", hasChildren: true },

    { nodePath: "6.2.1.1", title: "Sniper" },
    { nodePath: "6.2.1.2", title: "	Alchemist" },
    { nodePath: "6.2.1.3", title: "Mirana" },
    { nodePath: "6.2.2", title: "Batrider" },
    { nodePath: "7", title: "7" },
    { nodePath: "8", title: "8", hasChildren: true },
    { nodePath: "8.1", title: "8.1", hasChildren: true },
    { nodePath: "8.1.1", title: "Night Stalker" },

    { nodePath: "8.1.2", title: "Lycan" },
    { nodePath: "8.1.3", title: "Troll Warlord" },
    { nodePath: "8.2", title: "8.2", hasChildren: true },

    { nodePath: "8.2.1", title: "8.2.1", hasChildren: true },

    { nodePath: "8.2.1.1", title: "Bane" },
    { nodePath: "8.2.1.2", title: "Ogre Magi" },
    { nodePath: "8.2.1.3", title: "Luna" },
    { nodePath: "8.2.2", title: "Keeper of the Light" },
  ];


  let showCheckboxes = true;
  let hideGroup = 1;
  let showTree = true;
  let recursive = true;
  let leafNodeCheckboxesOnly = false;
  let search = true;
  let disableOrHide = false;

</script>
<PageHeader>
  <svelte:fragment>
    {$_("tree.title")}
  </svelte:fragment>

  <svelte:fragment slot="breadcrumbs">
    <BreadcrumbItem><a href="#/">{$_("home.title")}</a></BreadcrumbItem>
    <BreadcrumbItem active>
      
        {$_("tree.title")}
    </BreadcrumbItem>
  </svelte:fragment>
</PageHeader>
<div class="row">
  <div class="col-lg-5 col-md-12">
    <Card outline color="primary">
      <svelte:fragment slot="header">Tree</svelte:fragment>
      {#if showTree}
        <TreeViewWSearch
          {recursive}
          bind:tree
          maxExpandedDepth="5"
          let:node
          bind:showCheckboxes={showCheckboxes}
          bind:leafNodeCheckboxesOnly
          showInput={search}
          {disableOrHide}
        >
          {node.title}
        </TreeViewWSearch>
      {/if}

    </Card>
  </div>
  <div class="col-lg-3 col-md-12">
    <Card outline color="primary">
      <svelte:fragment slot="header">Tree options</svelte:fragment>
      <FormGroup>
        <Checkbox
          level="danger"
          name="show-checkboxes"
          id="show-checkboxes"
          bind:checked={showCheckboxes}
        >
          <Label inputId="show-checkboxes">Show checkboxes</Label>
        </Checkbox>
      </FormGroup>
      <FormGroup>
        <Checkbox
          level="danger"
          name="recursivee-selection"
          id="recursivee-selection"
          bind:checked={recursive}
        >
          <Label inputId="recursivee-selection">recursivee selection</Label>
        </Checkbox>
      </FormGroup>
      <FormGroup>
        <Checkbox
          level="danger"
          name="leafNodeCheckboxesOnly"
          id="leafNodeCheckboxesOnly"
          bind:checked={leafNodeCheckboxesOnly}
        >
          <Label inputId="leafNodeCheckboxesOnly"
            >leaf node checkboxes only</Label
          >
        </Checkbox>
      </FormGroup>
      <FormGroup>
        <Checkbox
          name="show-search"
          id="show-search"
          bind:checked={search}
        >
          <Label inputId="show-search">show search</Label>
        </Checkbox>
      </FormGroup>
      <FormGroup>
        <Checkbox
          name="disable-or-hide"
          id="disable-or-hide"
          bind:checked={disableOrHide}
        >
          <Label inputId="disable-or-hide">disable or hide</Label>
        </Checkbox>
      </FormGroup>
      <Switch
        checkedClass="bg-green"
        uncheckedClass="bg-gray"
        bind:checked={showTree}
      />
    </Card>
  </div>
  <div class="col-lg-4 col-md-12">
    <Card outline color="primary"
      ><svelte:fragment slot="header">Selected</svelte:fragment>
      <ul>
        {#each tree as node}
          {#if node.__selected === true}
            <li>{node.nodePath} - {node.title}</li>
          {/if}
          <!-- {tr.__selected} - {tr.nodePath} <br/> -->
        {/each}
      </ul>
    </Card>
  </div>
</div>
